

``mx.nd.random.negative.binomial``
====================================================================

Description
----------------------

Draw random samples from a negative binomial distribution.

Samples are distributed according to a negative binomial distribution parametrized by
*k* (limit of unsuccessful experiments) and *p* (failure probability in each experiment).
Samples will always be returned as a floating point data type.


**Example**::

	 
	 negative_binomial(k=3, p=0.4, shape=(2,2)) = [[ 4.,  7.],
	 [ 2.,  5.]]
	 
	 


Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``k``                                  | int, optional, default='1'.                                |
|                                        |                                                            |
|                                        | Limit of unsuccessful experiments.                         |
+----------------------------------------+------------------------------------------------------------+
| ``p``                                  | float, optional, default=1.                                |
|                                        |                                                            |
|                                        | Failure probability in each experiment.                    |
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
| ``dtype``                              | {'None', 'float16', 'float32', 'float64'},optional,        |
|                                        | default='None'.                                            |
|                                        |                                                            |
|                                        | DType of the output in case this can't be inferred.        |
|                                        | Defaults to float32 if not defined                         |
|                                        | (dtype=None).                                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/random/sample_op.cc#L164

