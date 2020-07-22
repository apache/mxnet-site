

``mx.symbol.sample_exponential``
================================================================

Description
----------------------

Concurrent sampling from multiple
exponential distributions with parameters lambda (rate).

The parameters of the distributions are provided as an input array.
Let *[s]* be the shape of the input array, *n* be the dimension of *[s]*, *[t]*
be the shape specified as the parameter of the operator, and *m* be the dimension
of *[t]*. Then the output will be a *(n+m)*-dimensional array with shape *[s]x[t]*.

For any valid *n*-dimensional index *i* with respect to the input array, *output[i]*
will be an *m*-dimensional array that holds randomly drawn samples from the distribution
which is parameterized by the input value at index *i*. If the shape parameter of the
operator is not set, then one sample will be drawn per distribution and the output array
has the same shape as the input array.


**Example**::

	 
	 lam = [ 1.0, 8.5 ]
	 
	 // Draw a single sample for each distribution
	 sample_exponential(lam) = [ 0.51837951,  0.09994757]
	 
	 // Draw a vector containing two samples for each distribution
	 sample_exponential(lam, shape=(2)) = [[ 0.51837951,  0.19866663],
	 [ 0.09994757,  0.50447971]]
	 
	 

Usage
----------

.. code:: r

	mx.symbol.sample_exponential(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``lam``                                | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Lambda (rate) parameters of the distributions.             |
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
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/random/multisample_op.cc#L284

