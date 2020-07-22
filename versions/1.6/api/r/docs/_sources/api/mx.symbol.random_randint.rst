

``mx.symbol.random_randint``
========================================================

Description
----------------------

Draw random samples from a discrete uniform distribution.

Samples are uniformly distributed over the half-open interval *[low, high)*
(includes *low*, but excludes *high*).


**Example**::

	 
	 randint(low=0, high=5, shape=(2,2)) = [[ 0,  2],
	 [ 3,  1]]
	 
	 
	 

Usage
----------

.. code:: r

	mx.symbol.random_randint(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``low``                                | long, required.                                            |
|                                        |                                                            |
|                                        | Lower bound of the distribution.                           |
+----------------------------------------+------------------------------------------------------------+
| ``high``                               | long, required.                                            |
|                                        |                                                            |
|                                        | Upper bound of the distribution.                           |
+----------------------------------------+------------------------------------------------------------+
| ``shape``                              | Shape(tuple), optional, default=None.                      |
|                                        |                                                            |
|                                        | Shape of the output.                                       |
+----------------------------------------+------------------------------------------------------------+
| ``ctx``                                | string, optional, default=''.                              |
|                                        |                                                            |
|                                        | Context of output, in format [cpu|gpu|cpu_pinned](n). Only |
|                                        | used for imperative                                        |
|                                        | calls.                                                     |
+----------------------------------------+------------------------------------------------------------+
| ``dtype``                              | {'None', 'int32', 'int64'},optional, default='None'.       |
|                                        |                                                            |
|                                        | DType of the output in case this can't be inferred.        |
|                                        | Defaults to int32 if not defined                           |
|                                        | (dtype=None).                                              |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/random/sample_op.cc#L194

