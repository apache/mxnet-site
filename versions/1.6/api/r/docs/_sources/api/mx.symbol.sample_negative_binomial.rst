

``mx.symbol.sample_negative_binomial``
============================================================================

Description
----------------------

Concurrent sampling from multiple
negative binomial distributions with parameters *k* (failure limit) and *p* (failure probability).

The parameters of the distributions are provided as input arrays.
Let *[s]* be the shape of the input arrays, *n* be the dimension of *[s]*, *[t]*
be the shape specified as the parameter of the operator, and *m* be the dimension
of *[t]*. Then the output will be a *(n+m)*-dimensional array with shape *[s]x[t]*.

For any valid *n*-dimensional index *i* with respect to the input arrays, *output[i]*
will be an *m*-dimensional array that holds randomly drawn samples from the distribution
which is parameterized by the input values at index *i*. If the shape parameter of the
operator is not set, then one sample will be drawn per distribution and the output array
has the same shape as the input arrays.

Samples will always be returned as a floating point data type.


**Example**::

	 
	 k = [ 20, 49 ]
	 p = [ 0.4 , 0.77 ]
	 
	 // Draw a single sample for each distribution
	 sample_negative_binomial(k, p) = [ 15.,  16.]
	 
	 // Draw a vector containing two samples for each distribution
	 sample_negative_binomial(k, p, shape=(2)) = [[ 15.,  50.],
	 [ 16.,  12.]]
	 
	 

Usage
----------

.. code:: r

	mx.symbol.sample_negative_binomial(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``k``                                  | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Limits of unsuccessful experiments.                        |
+----------------------------------------+------------------------------------------------------------+
| ``shape``                              | Shape(tuple), optional, default=[].                        |
|                                        |                                                            |
|                                        | Shape to be sampled from each random distribution.         |
+----------------------------------------+------------------------------------------------------------+
| ``dtype``                              | {'None', 'float16', 'float32', 'float64'},optional,        |
|                                        | default='None'.                                            |
|                                        |                                                            |
|                                        | DType of the output in case this can't be inferred.        |
|                                        | Defaults to float32 if not defined                         |
|                                        | (dtype=None).                                              |
+----------------------------------------+------------------------------------------------------------+
| ``p``                                  | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Failure probabilities in each experiment.                  |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/random/multisample_op.cc#L289

